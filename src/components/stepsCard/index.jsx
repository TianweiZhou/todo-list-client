import React from 'react';
import { CardContainer, StepsTitle, StepsEditBtn, StepsDeleteBtn } from './style';
import { Steps } from 'antd';
import 'antd/dist/antd.css';

export default function stepsCard() {
    return (
        <>
            <CardContainer>
                <StepsTitle>Steps title</StepsTitle>
                <StepsEditBtn>Edit</StepsEditBtn>
                <StepsDeleteBtn>Delete</StepsDeleteBtn>
                <Steps>
                    <Steps.Step title="Step 1" description="This is a description." />
                    <Steps.Step title="Step 2" description="This is a description." />
                    <Steps.Step title="Step 3" description="This is a description." />
                </Steps>
            </CardContainer>
        </>
    )
}