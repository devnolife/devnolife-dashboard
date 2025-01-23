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

    console.log("🚀 ~ renderMenuItems ~ menuItems:", menuItems)

    if (role === 'admin') {
      menuItems.push({ href: '/admin', icon: 'tabler-shield', label: 'Dashboard' })
    } else if (role === 'mahasiswa') {
      menuItems.push({ href: '/mahasiswa', icon: 'tabler-school', label: 'Dashboard' })
    } else if (role === 'fakultas') {
      menuItems.push({ href: '/fakultas', icon: 'tabler-teacher', label: 'Dashboard' })
    } else if (role === 'prodi') {
      menuItems.push({ href: '/prdi', icon: 'tabler-book', label: 'Dashboard' })
    } else if (role === 'tatausaha') {
      menuItems.push({ href: '/tatausaha', icon: 'tabler-building', label: 'Dashboard' })
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
        renderExpandedMenuItemIcon={{ icon: <i className='text-xs tabler-circle' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        {renderMenuItems()}
      </Menu>
    </ScrollWrapper>
  )
}

export default dynamic(() => Promise.resolve(VerticalMenu), { ssr: false })
