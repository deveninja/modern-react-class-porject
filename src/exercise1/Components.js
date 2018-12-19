import React from 'react'
import CommentDetail from './CommentDetail'
import faker from 'faker'
import ApprovalCard from './ApprovalCard';

const Components = () => {
  return (
    <div className="ui container comments">

      <ApprovalCard>
        <div>
          <h4>Are you Sure?</h4>
          <p>This will post the comment permanently</p>
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Ice Blue" 
          time="1:00pm" 
          comment="Hello Wolrd"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Dave" 
          time="2:00pm" 
          comment="Fizz Bas"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard> 

      <ApprovalCard>
        <CommentDetail 
          author="Gerby" 
          time="3:00pm" 
          comment="Funtion Creator"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard> 

      <ApprovalCard>
        <CommentDetail 
          author="Niño" 
          time="1:30pm" 
          comment="Create React App" 
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Kaeyl"
          time="2:45pm"
          comment="Npm start!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard> 

    </div>    
  )
}

export default Components