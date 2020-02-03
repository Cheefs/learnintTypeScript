import styled from 'styled-components';

export const Style = {
    HtmlHeader: styled.header`
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.17);
        background-color: #ffffff;
        padding: 30px 0;
        border: 1px solid #ececec;
    `,
    Container: styled.div`
        width: 1140px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    `,
    FlexContainer: styled.div`
        display: flex;
        align-items: center;
        margin-left: 50px;
    `,

    HeaderLeft: styled.div`
        display: flex;
        align-items: center;
    `,
    HeaderRight: styled.div`
        display: flex;
        align-items: center;
    `,
}

