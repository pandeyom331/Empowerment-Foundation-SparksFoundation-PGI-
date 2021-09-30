import React from 'react';
import Icon1 from '../../images/bg-cover.jpg';
import Icon2 from '../../images/youth.jpg';
import Icon3 from '../../images/download.jfif';

import { MessageContainer, MessageCard, MessageH1, MessageH2, 
    MessageIcon, MessageP, MessageWrapper } from './MessageElements';

const Message = () => {
    return (
        <MessageContainer id="Message">
          <MessageH1>Our Message To You</MessageH1>
          <MessageWrapper>
              <MessageCard>
                  <MessageIcon src={Icon1} />
                  <MessageH2>Make someone smile</MessageH2>
                  <MessageP>many children in foster care system are often in midst of a family challenge, help them by donating now.</MessageP>
              </MessageCard>
              <MessageCard>
                  <MessageIcon src={Icon2} />
                  <MessageH2>Give from your heart</MessageH2>
                  <MessageP>our inititative is to to make a dispensary available in every corner of the city so that everyone gets proper care.</MessageP>
              </MessageCard>
              <MessageCard>
                  <MessageIcon src={Icon3} />
                  <MessageH2>Have a Big Heart</MessageH2>
                  <MessageP>you were born with the ability to change someone's life and it's your responsibility that you use it wisely.</MessageP>
              </MessageCard>
          </MessageWrapper>  
        </MessageContainer>
    )
}

export default Message
