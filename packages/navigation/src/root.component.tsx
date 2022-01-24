import styled from "@emotion/styled";
import { GlobalStylesComponent } from "@mfe-single-spa/styleguide";
import { BrowserRouter, NavLink } from "react-router-dom";
import { Provider } from "reakit";
import * as system from "reakit-system-bootstrap";

export default function Root() {
  const Navbar = styled.nav`
    padding: var(--ss-space-3) var(--ss-space-2);
    background: var(--ss-color-foreground);
    height: 100vh;
    font-family: var(--ss-font-family-default);

    .header-inner {
      display: flex;
      flex-direction: column;
    }
  `;

  const Logo = styled.div`
    display: flex;
    align-items: center;

    img {
      width: auto;
      height: 2rem;
      margin-left: calc(var(--ss-space-2) + var(--ss-space-1));
    }

    span {
      color: var(--ss-color-secondary-text);
      font-size: var(--ss-font-size-3);
      margin-left: var(--ss-space-2);
    }
  `;

  const ReactToolbar = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: var(--ss-space-4);
  `;

  const ReactToolbarItem = styled(NavLink)`
    color: var(--ss-color-muted);
    padding: var(--ss-space-2) calc(var(--ss-space-2) + var(--ss-space-1));
    border-radius: var(--ss-radius-border);
    text-decoration: none;

    &:hover {
      background: var(--ss-color-hover-muted);
      cursor: pointer;
    }

    &.active {
      background: var(--ss-color-active-background);
    }
  `;

  const links = [
    {
      href: "/dashboard",
      name: "Dashboard",
    },
    {
      href: "/team",
      name: "Team",
    },
    {
      href: "/projects",
      name: "Projects",
    },
    {
      href: "/calendar",
      name: "Calendar",
    },
  ];

  return (
    <Provider unstable_system={system}>
      <GlobalStylesComponent />
      <Navbar aria-label="Header" className="single-spa-theme">
        <div className="header-inner">
          <Logo>
            <img
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Logo"
            />
            <span>singlespa</span>
          </Logo>
          <BrowserRouter>
            <ReactToolbar>
              {links.map(({ name, href }, index) => (
                <ReactToolbarItem key={index} to={href}>
                  {name}
                </ReactToolbarItem>
              ))}
            </ReactToolbar>
          </BrowserRouter>
        </div>
      </Navbar>
    </Provider>
  );
}
