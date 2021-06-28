import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function VerifyAuthorization() {
  let history = useHistory()
  const mykey = window.btoa('No!Zc=!kPj:Vus*)0BRsoZY9')
  const [skey, setSKey] = useState('')
  const [isSuccess, setSuccess] = useState(false)
  const [meDisabled, setMe] = useState(false)

  const handleMe = (e) => {
    e.preventDefault()
    let enc = window.btoa(skey)
    if (atob(mykey) === atob(enc)) {
      setSuccess(true)
      setMe(true)
    } else {
      setSuccess(false)
      setMe(true)
    }
  }

  const addCricketer = () => {
    history.push('/add-cricketer/_add')
  }

  return (
    <div>
      <form
        onSubmit={(e) => handleMe(e)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10%',
        }}
      >
        <p className="caution">
          This additional step is just to deny the access to all the people to
          add a new cricketer. This application backend hosted on a free
          platform , So If I allow everyone to add a new cricketer then I end up
          with getting into premium category (I don't have money 😉).
        </p>
        <br />
        <p className="caution">
          Don't spend much time on hacking this (ofcourse you won't find
          anything 😂😂😂because this application doesn't have any confidential
          data.).
        </p>
        <div className="form-group">
          <input
            placeholder="Secret Key"
            name="skey"
            className="form-control"
            value={skey}
            onChange={(e) => setSKey(e.target.value)}
            required
          />
        </div>
        <br />
        <br />
        {isSuccess ? (
          <div>
            <h2
              className="verify-success"
              style={{ display: meDisabled ? 'block' : 'none' }}
            >
              You've successfully authenticated the secretKey
            </h2>
            <button
              className="btn btn-success"
              onClick={addCricketer}
              style={{
                marginBottom: '20px',
              }}
            >
              Add a Cricketer
            </button>
          </div>
        ) : (
          <h2
            className="verify-failed"
            style={{ display: meDisabled ? 'block' : 'none' }}
          >
            Oops! You failed
          </h2>
        )}
        <br />
        <br />
        <button
          type="submit"
          className="btn btn-primary"
          style={{
            display: isSuccess ? 'none' : 'block',
            marginBottom: '20px',
          }}
        >
          Verify
        </button>
        <button
          className="btn btn-info"
          onClick={() => history.push('/cricketers')}
        >
          Go Back
        </button>
      </form>
    </div>
  )
}

export default VerifyAuthorization
