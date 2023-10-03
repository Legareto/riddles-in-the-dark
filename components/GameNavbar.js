import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function GameNavbar() {
  return (
    <Navbar isBordered className="bg-teal border-tealborder">
      <NavbarBrand>
        <p className="text-yellowgold text-4xl">Riddles in the Dark</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-white" href="/">
            New Game
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gold" href="#" isDisabled>
            Load Game
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gold" href="#" isDisabled>
            Options
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link className="text-gold" href="#" isDisabled>
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="text-gold"
            color=""
            href="#"
            variant="flat"
            isDisabled
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
