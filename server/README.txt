# Clas of Clans API

This is a lightweight backend built with Node.js and  Express.js. It fetches some data I value from the Clash of Clans API using Axios and serves it to the frontend via simple API endpoints.

## Notes
- All requests to the Clash of Clans API require a valid API token in the request headers. API token can be obtained from [Clash of Clans Developer Portal](https://developer.clashofclans.com/).
- This backend assumes the token is already set in the `.env` file under the key `API_TOKEN`.


## Endpoints

### Clan
 - `GET /api/clan-members`  
  Responds with JSON containing all clan members in a specific order.

- `GET /api/clan-info`  
  Responds with JSON containing some labels of the clan.

- `GET /api/builder-members`  
  Responds with JSON containing clan members, focusing on their builder base.

### Player
- `GET /api/player/:playerTag`  
  Responds with JSON containing information about a specific player.

## Example Request
curl -H "Authorization: Bearer YOUR_API_TOKEN" http://localhost:3000/api/clan-members

---

This backend is designed to work as part of a Clash of Clans frontend application.
