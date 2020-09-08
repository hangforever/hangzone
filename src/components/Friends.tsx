import React, { useState, useContext, useEffect, useDebugValue } from 'react'
import { observer } from 'mobx-react-lite'
import appStoreContext from '../stores/appStoreContext'
import firebaseContext from '../firebaseContext'
import FriendsList from './FriendsList'
import { getFriendProfiles } from '../db/profiles'
import './Friends.scss'
import { IProfile } from 'types'


interface Props {

}

const Friends: React.SFC<Props> = () => {
  const [search, updateSearch] = useState('')
  const appStore = useContext(appStoreContext)
  const firebase = useContext(firebaseContext)
  const { firebaseUser, profile, friendProfiles } = appStore
  const [friendProfileState, updateFriendProfiles] = useState(friendProfiles)

  const filteredFriends = friendProfileState.filter((cur) => {
    const searchRegex = new RegExp(`.*${search}.*`, 'i')
    return searchRegex.test(cur.displayName)
  })

  const handleAddFriend = () => {
    /***
     TODO: handle adding new friends, here's an idea
     ****
      if (firebaseUser && profile) { 
      const idToAdd: string | null = prompt('add this friend id')
      profile.friendIds = {...profile.friendIds, [idToAdd]: true}
      console.log(profile.friendIds)
    }
     */
  }

  return firebaseUser && profile && friendProfiles.length > 0 ? (
    <div className="Friends">
      <div className="Friends__search">
        <input
          type="text"
          placeholder="search friends list"
          className="input__search input-primary"
          name="search"
          value={search}
          onChange={e => updateSearch(e.target.value)} 
        />
      </div>
      <div className="Friends__friends-list">
        <FriendsList friends={filteredFriends}/>
      </div>
      <div className="Friends__controls">
        <button 
          className="button__add-friend button-primary"
          onClick={handleAddFriend}
        >
          Add Friend
        </button>
      </div>
    </div>
  ) : (
    <div className="Friends">
      <div className="Friends__message">
        <p>It seems you have no friends :'(</p>
      </div>
      <div className="Friends__controls">
        <button 
          className="button__add-friend button-primary"
          onClick={handleAddFriend}
        >
          Add Friend
        </button>
      </div>
    </div>
  )
}

export default observer(Friends)
