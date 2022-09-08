import React from 'react'
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'

const Discussion = () => {
  const data = [
    {
      userId: '01a',
      comId: '012',
      fullName: 'tash',
      avatarUrl: 'https://ui-avatars.com/api/name=Tash&background=random',
      
      text: 'Hey, Loved your cinema! ',
      replies: [
        {
          userId: '02a',
          comId: '013',
         
          fullName: 'Kya',
          avatarUrl: 'https://ui-avatars.com/api/name=Kya&background=random',
          text: 'nice '
        },
        
         
      ]
    },
    {
      userId: '02b',
      comId: '017',
      fullName: 'Damian',
     
      text: 'I have a doubt about the 4th point🤔',
      avatarUrl: 'https://ui-avatars.com/api/name=Dame&background=random',
      replies: []
    }
  ]
  return (
    <div style={{ width: '100%' }}>
      <a
        style={{ color: 'black', cursor: 'pointer' }}
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/RiyaNegi/react-comments-section/blob/main/example/src/components/DefaultComponent.tsx'
      >
        <span className='title'>Discussion</span>
      </a>
      <CommentSection
        currentUser={{
          currentUserId: '01a',
          currentUserImg:
            'https://ui-avatars.com/api/name=Tash&background=random',
          
          currentUserFullName: 'Tashfeen'
        }}
        commentData={data}
        logIn={{
          loginLink: 'http://localhost:3001/',
          signupLink: 'http://localhost:3001/'
        }}
        
      />
    </div>
  )
}

export default Discussion;




