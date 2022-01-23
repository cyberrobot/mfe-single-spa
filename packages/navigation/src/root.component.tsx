import styled from "@emotion/styled";
import { GlobalStylesComponent } from "@mfe-single-spa/styleguide";
import { BrowserRouter, NavLink } from "react-router-dom";
import { Provider } from "reakit";
import * as system from "reakit-system-bootstrap";

export default function Root() {
  const Header = styled.nav`
    padding: var(--ss-space-3) var(--ss-space-4);
    background: var(--ss-color-foreground);

    .header-inner {
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      max-width: 80rem;
      margin-left: auto;
      margin-right: auto;
    }
  `;

  const Logo = styled.div`
    display: flex;
    align-items: center;

    img {
      width: auto;
      height: 2rem;
    }
  `;

  const ReactToolbar = styled.div`
    margin-left: var(--ss-space-4);
    display: flex;
  `;

  const ReactToolbarItem = styled(NavLink)`
    color: var(--ss-color-muted);
    margin-left: var(--ss-space-3);
    padding: var(--ss-space-2) calc(var(--ss-space-2) + var(--ss-space-1));
    border-radius: var(--ss-radius-border);
    text-decoration: none;

    &:first-of-type {
      margin-left: 0;
    }

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
      <Header aria-label="Header" className="single-spa-theme">
        <div className="header-inner">
          <Logo>
            <img
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Logo"
            />
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
      </Header>
    </Provider>
  );
}
