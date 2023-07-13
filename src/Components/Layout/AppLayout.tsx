import { CSSProperties, PropsWithChildren, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export function AppLayout(props: PropsWithChildren) {
  const [input, setInput] = useState("");

  const { children } = props;
  const navStyles: CSSProperties = {
    background: "#DC143C",
    padding: "1em 2em",
    borderRadius: "0 0 2em 2em",
  };
  const change = (e: any) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const router = useRouter();
  const search = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/details/" + input);
  };
  return (
    <>
      <div>
        <Navbar
          expand="lg"
          className="bg-body-tertiary"
          style={{ padding: "0" }}
        >
          <Container fluid style={navStyles}>
            <Link href={"/"}>
              <Navbar.Brand>
                <Image src="/pokemon.png" alt="logo" width={100} height={50} />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Form
                className="d-flex"
                onSubmit={(e) => {
                  search(e);
                }}
              >
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => change(e)}
                />
                <Button type="submit" variant="dark">
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {children}
      </div>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
