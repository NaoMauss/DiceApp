import React from 'react';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageLine,
} from '../components/styles';

const Logo = () => {
    return (
        <StyledContainer>
            <InnerContainer>
                <PageLogo resizeMode="contain" source={require('./../assets/icon/logo.png')} />
                <PageLine />
            </InnerContainer>
        </StyledContainer>
    )
}

export default Logo;