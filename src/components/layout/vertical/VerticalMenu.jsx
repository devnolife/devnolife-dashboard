import { useEffect, useState } from 'react'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'

import { useTheme } from '@mui/material/styles'
import PerfectScrollbar from 'react-perfect-scrollbar'

import { Menu, MenuItem } from '@menu/vertical-menu'
import useVerticalNav from '@menu/hooks/useVerticalNav'
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

const RenderExpandIcon = ({ open, transitionDuration }) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='tabler-chevron-right' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ scrollMenu }) => {
  const theme = useTheme()
  const verticalNavOptions = useVerticalNav()
  const { isBreakpointReached, transitionDuration } = verticalNavOptions
  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  const [role, setRole] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser)

        setRole(parsedUser.role)
      } catch {
        router.push('/login')
      }
    } else {
      router.push('/login')
    }
  }, [router])

  const renderMenuItems = () => {
    const menuItems = []

    switch (role) {
      case 'admin':
        menuItems.push({ href: '/admin', icon: 'tabler-shield', label: 'Dashboard' })
        break
      case 'mahasiswa':
        menuItems.push({ href: '/mahasiswa', icon: 'tabler-school', label: 'Dashboard' })
        menuItems.push({ href: '/mahasiswa/pengajuan', icon: 'tabler-file', label: 'Pengajuan' })
        menuItems.push({ href: '/mahasiswa/akademik', icon: 'tabler-book', label: 'Akademik' })
        menuItems.push({ href: '/mahasiswa/kkp', icon: 'tabler-briefcase', label: 'Kuliah Kerja Profesi' })
        menuItems.push({ href: '/mahasiswa/ujian', icon: 'tabler-checklist', label: 'Ujian' })
        menuItems.push({ href: '/mahasiswa/pembayaran', icon: 'tabler-credit-card', label: 'Pembayaran' })
        menuItems.push({ href: '/mahasiswa/laboratorium', icon: 'tabler-flask', label: 'Laboratorium' })
        break
      case 'fakultas':
        menuItems.push({ href: '/fakultas', icon: 'tabler-teacher', label: 'Dashboard' })
        break
      case 'prodi':
        menuItems.push({ href: '/prdi', icon: 'tabler-book', label: 'Dashboard' })
        break
      case 'tatausaha':
        menuItems.push({ href: '/tatausaha', icon: 'tabler-building', label: 'Dashboard' })
        break
      default:
        break
    }

    return menuItems.map(item => (
      <MenuItem key={item.href} href={item.href} icon={<i className={item.icon} />}>
        {item.label}
      </MenuItem>
    ))
  }

  return (
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
          className: 'bs-full overflow-y-auto overflow-x-hidden',
          onScroll: container => scrollMenu(container, false)
        }
        : {
          options: { wheelPropagation: false, suppressScrollX: true },
          onScrollY: container => scrollMenu(container, true)
        })}
    >
      <Menu
        popoutMenuOffset={{ mainAxis: 23 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={() => <i className='text-xs tabler-circle' />}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        {renderMenuItems()}
      </Menu>
    </ScrollWrapper>
  )
}

export default dynamic(() => Promise.resolve(VerticalMenu), { ssr: false })
