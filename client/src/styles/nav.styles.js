import styled from 'styled-components';

const StyledNav = styled.header`

    nav {
        background: #1a1a1a;
        width: 100%;
        padding: 10px 10%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
    }

    .profile-pic {
        width: 40px;
        border-radius: 50%;
        cursor: pointer;
        margin-left: 30px;
    }

`;
export default StyledNav;