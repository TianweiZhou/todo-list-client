import React from 'react';
import {NavContainer, NavItem} from './style';

export default function Nav() {
    return (
        <div>
            <NavContainer>
                <NavItem><a href='/'>Reminder</a></NavItem>
                <NavItem><a href='/'>Steps</a></NavItem>
                <NavItem><a href='/'>History</a></NavItem>
            </NavContainer>
        </div>
    );
};