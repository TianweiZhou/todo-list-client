import styled from 'styled-components';

export const CardContainer = styled.div`
    display: inline-block;
    width: 90%;
    height: 10%;
    background-color: #f0f5f5;
    border-radius: 5px;
    box-shadow:  0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
`;

export const StepsTitle = styled.h4`
    display: inline-flex;
    margin: 10px 0 0 14px;
    float: left;
`;

export const StepsEditBtn = styled.button`
    margin: 10px 10px 0 0;
    width: 50px;
    float: right;
`;

export const StepsDeleteBtn = styled.button`
    float: right;
    width: 50px;
    margin: 10px 10px 0 0;
`;