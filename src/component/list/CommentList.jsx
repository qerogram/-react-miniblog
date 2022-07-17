import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-itmes: flex-start;
    justify-content: center;

    & > * {
        :not(:last-child) {
            margin-botoom: 16px;
        }
    }
`;

const CommentList = (props) => {
    const { comments } = props;

    return (
        <Wrapper>
            { comments.map((comment, index) => {
                return <CommentListItem key={index} comment={comment} />;
            })}
        </Wrapper>
    )
}

export default CommentList;