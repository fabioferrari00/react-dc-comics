const Navbar = () => {
  const links = [
    {
      id: 1,
      label: "Characters",
      href: "#",
      current: false
    },
    {
      id: 2,
      label: "Comics",
      href: "#",
      current: false
    },
    {
      id: 3,
      label: "Movies",
      href: "#",
      current: false
    },
    {
      id: 4,
      label: "TV",
      href: "#",
      current: false
    },
    {
      id: 5,
      label: "Games",
      href: "#",
      current: false
    },
    {
      id: 6,
      label: "Collectibilies",
      href: "#",
      current: false
    },
    {
      id: 7,
      label: "Videos",
      href: "#",
      current: false
    },
    {
      id: 8,
      label: "Fans",
      href: "#",
      current: false
    },
    {
      id: 9,
      label: "News",
      href: "#",
      current: false
    },
    {
      id: 10,
      label: "Shop",
      href: "#",
      current: false
    },
  ]
  return (
    <nav>
      <ul>
        {links.map(link => {
          return (
            <li key={link.id}>
              <a href={link.href}>
                {link.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar;