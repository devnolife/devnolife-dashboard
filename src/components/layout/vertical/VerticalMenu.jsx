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

    if (role === 'admin') {
      menuItems.push({ href: '/admin', icon: 'tabler-shield', label: 'Admin' })
    } else if (role === 'student') {
      menuItems.push({ href: '/student', icon: 'tabler-school', label: 'Student' })
    } else if (role === 'faculty') {
      menuItems.push({ href: '/faculty', icon: 'tabler-teacher', label: 'Faculty' })
    } else if (role === 'study-program') {
      menuItems.push({ href: '/study-program', icon: 'tabler-book', label: 'Study Program' })
    } else if (role === 'administration') {
      menuItems.push({ href: '/administration', icon: 'tabler-building', label: 'Administration' })
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
