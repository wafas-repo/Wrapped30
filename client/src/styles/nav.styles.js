import styled from 'styled-components';

const StyledNav = styled.nav`

    nav {
        background: #1a1a1a;
        width: 100%;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: end;
        position: relative;
    }

    .profile-pic {
        width: 40px;
        border-radius: 50%;
        cursor: pointer;
        margin-left: 30px;
    }

    .sub-menu-wrap {
        position: absolute;
        top: 100%;
        right: 0%;
        width: 200px;
        border: white solid 1px;
        z-index: 1;
        overflow: hidden;
        transition: height 0.3s ease-in-out;
    }

    .sub-menu {
        background: black;

        hr {
            border: 0;
            height: 1px;
            width: 100%;
            background: #ccc;
            margin: 15px 0;
        }
    }

    .sub-menu-link {
        display: flex;
        align-items: center;
        text-decoration: none;
        margin: 12px 0;
        
        p {
            width: 100%;
            
        }
    }

    .sub-menu-link:hover p {
        font-weight: 600;
    }

`;
export default StyledNav;