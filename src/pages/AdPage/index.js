import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageArea } from './styled';
import useApi from '../../helpers/OlxAPI';

import { PageContainer } from '../../components/MainComponents';

const Page = () => {
    const api = useApi();
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState({});

    return(
        <PageContainer>
            <PageArea>
               <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                            ...1adImage
                        </div>
                        <div className="adInfo">
                            <div className="adName">
                                ...2adName
                            </div>
                            <div className="adDescription">
                                ...3adDescript
                            </div>
                        </div>
                    </div>
               </div>

               <div className="rightSide">
                    ...4RightSid
               </div>
            </PageArea>
        </PageContainer>
    );
}

export default Page;