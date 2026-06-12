import styled from "styled-components";

const Nav = styled.div`
  width: 98%;
  position: sticky;
  top:0px;
  height: 1.5rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background-color: ${(props)=>(props.color)}
`;

const Title = styled.div`
  text-decoration: underline;
  color: #ffffff;
`

function Navbar(props){
    return (
      <>
        {/**<div className="navbar"> */}
        <Nav color="#002f4e">
          <Title className="title">Movie Flix</Title>
          <div className="cart">
            <img
              src="https://cdn-icons-png.flaticon.com/128/8381/8381283.png"
              alt="cart-img"
              className="cart-img"
            />
            <span className="cartCount">{props.cartCount}</span>
          </div>
        </Nav>
      </>
    );
}

export default Navbar;
