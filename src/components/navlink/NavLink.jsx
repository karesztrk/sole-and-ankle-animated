import React from 'react'
import styled from 'styled-components';
import { WEIGHTS } from '../../constants';

const NavLink = ({ children, ...delegated }) => {
    return (
        <Wrapper href="#" {...delegated}>
            <Text data={children}>{children}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-gray-900);
    font-weight: ${WEIGHTS.medium};
    overflow: hidden;

    &:first-of-type {
        color: var(--color-secondary);
    }
`;

const Text = styled.span`
    position: relative;
    display: inline-block;
    transition: transform 250ms ease-out;
    will-change: transform;

    &:before {
        position: absolute;
        will-change: transform;
        display: inline-block;
        transform: translateY(100%);
        transition: transform 250ms ease-out;
        font-weight: ${WEIGHTS.bold};
        content: '${props => props.data}';
    }

    @media (hover: hover) and (prefers-reduced-motion: no-preference) {
        ${Wrapper}:hover &, ${Wrapper}:focus & {
            transition: transform 150ms;
            transform: translateY(-100%);
    
            &:before {
                transition: transform 150ms;
                transform: translateY(100%);
            }
        }
    }
`;

export default NavLink;