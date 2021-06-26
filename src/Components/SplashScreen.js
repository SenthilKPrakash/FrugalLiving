import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

const Toggle = styled.button`
    cursor: pointer;
    height: 40px;
    width: 40px;   
    border-radius: 50%;
    border: none;
    padding-top: 2px;
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;

const Page = styled.div`
  ${'' /* display: flex; */}
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.pageBackground};
  transition: all .5s ease;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function Splash(props) {
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };

    const icon = props.theme === "light" ? <HiMoon size={20} /> : <CgSun size={20} />;

    return (
        <Page>
            <Container>
                <Toggle onClick={changeTheme}>
                    {icon}
                </Toggle>
            </Container>
        </Page>
    );
};

export default Splash;