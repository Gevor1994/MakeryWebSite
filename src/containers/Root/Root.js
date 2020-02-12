import React, {useState, useEffect} from 'react';
import Routes from '../../router/routes';
import RootWrapper, { ContentWrapper, Main, } from './Root.style.js';
import Load from "../../Loading/Loading";

const RootContainer = React.memo(
    () => {
        const [isLoading, setIsLoading] = useState(true);
        useEffect(() => {
            setIsLoading(false)
        }, []);
        return (
            <RootWrapper id="rootContainer">
                {
                    isLoading ? <Load/> : <RootWrapper id="rootContainer">
                        <Main id="main">
                            <ContentWrapper>
                                <Routes/>
                            </ContentWrapper>
                        </Main>
                    </RootWrapper>
                }
            </RootWrapper>

        );
    }
)


export default RootContainer;
