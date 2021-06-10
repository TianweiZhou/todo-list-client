import styled from 'styled-components'

export const NavContainer = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    left:0;
    overflow: hidden;
    background-color: #333;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
`;

export const NavItem = styled.li`
    float: left;
    & > a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
    & > a:hover{
        background-color: #111;
    }
`;