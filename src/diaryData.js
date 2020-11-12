export default [
  {
    title: 'Week 3',
    content: [
      {
        title: 'Tuesday',
        date: '29/09/2020',
        content: [
          'Create GitHub organisation and project repository with CRA w/ Typescript',
          'Experimented with acquiring an access token from the Spotify API'
        ],
        link: 'https://github.com/featherbear/sandbox-spotify-test-api-auth'
      },
      {
        title: 'Tuesday (Meeting)',
        date: '29/09/2020',
        content: [
          'Confirm project name - <b>Splitify</b>',
          'Discussed epics and features, creating them in Pivotal Tracker',
          'Assigned roles and tasks to the stories'
        ]
      },
      {
        title: 'Wednesday',
        date: '30/09/2020',
        content: 'Created logos and branding resource',
        link: 'https://github.com/Splitify/branding',
        frame: {
          url: 'https://splitify.github.io/branding/',
          title: 'Splitify Branding'
        }
      },
      {
        title: 'Thursday (Meeting)',
        date: '1/10/2020',
        content: [
          'Looked at similar and competing products (Organize Your Music, Remixr, Dubolt)',
          'Select technologies to use in the application - React w/ TypeScript, Server-less backend, Single Page Application',
          'Decided criteria for Beta and Release MVPs'
        ]
      },
      {
        title: 'Friday',
        date: '2/10/2020',
        content: 'Created project pitch presentation',
        link: 'https://github.com/Splitify/initial-project-pitch',
        frame: {
          url: 'https://splitify.github.io/initial-project-pitch/',
          title: 'Splitify Project Pitch'
        }
      }
    ]
  },
  {
    title: 'Week 4',
    content: [
      {
        title: 'Friday (Meeting)',
        date: '9/10/2020',
        content: [
          '<i>I was not able to work on the project this week due to other commitments</i>',
          "Team brainstormed, discussed and developed mockups of the application's interface and functionality"
        ]
      }
    ]
  },
  {
    title: 'Week 5',
    content: [
      {
        title: 'Friday',
        date: '16/10/2020',
        content: [
          '<i>I was not able to work on the project until late this week due to other commitments</i>',
          'Add storage provider to allow storing of application data locally within the browser (for data caching)',
          'Create authentication model for interacting with the Spotify API'
        ]
      },
      {
        title: 'Friday (Meeting)',
        date: '16/10/2020',
        content: [
          'Team discussed application data structure, as well as what data will be requested from the Spotify API'
        ]
      }
    ]
  },
  {
    title: 'Week 6',
    content: [
      {
        title: 'Sunday',
        date: '18/10/2020',
        content: ['Add Spotify-themed connect button to the login page']
      },
      {
        title: 'Monday',
        date: '19/10/2020',
        content: [
          'Create playlist selector component that lets the user select the desired playlist to split',
          'Improve application performance by making the authentication validation process execute only once per page load',
          'Note: The Spotify API returns paginated responses'
        ]
      },
      {
        title: 'Wednesday',
        date: '21/10/2020',
        content: [
          'Implement playlist selector search functionality',
          'UI and UX improvements of the the playlist selector',
          'Implement accumulation function (<i>Accumulumatorinator</i>)'
        ],
        link:
          'https://github.com/Splitify/splitify/blob/db136e05744b6463b60f0d9ef53cc1d274efde98/src/helpers/Accumulumatorinator.tsx'
      },
      {
        title: 'Thursday',
        date: '22/10/2020',
        content: [
          'Rewrite parser functions to return an incomplete data object, that can be completed expanded at a future time',
          'Add Skeleton loader to the Track entries in the playlists'
        ]
      },
      {
        title: 'Friday',
        date: '23/10/2020',
        content: [
          'Implement caching variant of the Accumulumatorinator',
          'Modify parsers to use the Caching Accumulumatorinator',
          'Optimise Spotify API request to fetch only track IDs',
          'Update Spotify API scopes to view private playlists',
          'Implement the creation of unique stub subplaylists',
          'Rewrite the `expand` method of incomplete data objects to return the same promise, so that all callers can await the promise'
        ]
      },
      {
        title: 'Friday (Meeting)',
        date: '23/10/2020',
        content: [
          'Outstanding UI and UX design questions were discussed and resolved',
          'Playlist filtering delayed to the Week 7 sprint - no affect on other stories and tasks'
        ]
      },
      {
        title: 'Saturday',
        date: '24/10/2020',
        content: [
          'Modify Subplaylist to take in actual playlist data (passed in from the Dashboard)',
          'Improve efficiency of genre-based track selection'
        ]
      }
    ]
  },
  {
    title: 'Week 7',
    content: [
      {
        title: 'Thursday',
        date: '29/10/2020',
        content: [
          'Implement track reordering with <a href="https://react-beautiful-dnd.netlify.app/"><pre>react-beautiful-dnd</pre></a>',
          'Auto-load playlists when the playlist selector is opened',
          'Experienced difficulties with UI element alignment as a result of the Table component layout'
        ]
      },
      {
        title: 'Friday',
        date: '30/10/2020',
        content: ['Code cleanup and type hinting optimisations']
      },
      {
        title: 'Friday (Meeting)',
        date: '30/10/2020',
        content: [
          'Discussed the need for correctly representing audio feature values (i.e. loudness should be in decibels rather than a percentage',
          'Playlist saving has not yet been completed, however this will not block any other features'
        ]
      },
      {
        title: 'Saturday',
        date: '31/10/2020',
        content: [
          'Refactor the audio feature selector component',
          'Refactor track listing from the Master Playlist and Sub-Playlist into a TrackList component',
          'Refactors blocking the Playlist Saving story until the changes have been merged into master'
        ]
      }
    ]
  },
  {
    title: 'Week 8',
    content: [
      {
        title: 'Sunday',
        date: '1/11/2020',
        content: [
          'Add drag icon hint to track entries',
          'Change track sorting component into a button'
        ]
      },
      {
        title: 'Monday',
        date: '2/11/2020',
        content: [
          'Change Table format of the track listing into a List format, as it was more suitable <i>(Refer to 29/10/2020)</i>',
          'Refactor Genre Selector and Feature Filter'
        ]
      },
      {
        title: 'Thursday',
        date: '5/11/2020',
        content: [
          'Implement virtual lists - which increased application performance by reducing the number of rendered list items (especially when there were over 100 tracks)',
          'Integrate drag and drop functionality with the virtual lists'
        ]
      },
      {
        title: 'Friday',
        date: '6/11/2020',
        content: [
          'Implement movement of tracks between sub-playlists',
          'Create track group stubs, and a wrapper for tracks so that custom metadata can be attached for each track - required to allow proper marking of custom tracks, as well as functional inter-playlist track movement'
        ]
      },

      {
        title: 'Friday (Meeting)',
        date: '6/11/2020',
        content: [
          'Concern raised about the lack of genre information in each track, as Spotify (falsely) claims to include genre data in each track. Rather it only includes this data in the artist data',
          'Team decided to retrieve genre data from the <a href="https://www.last.fm/api">Last.fm API</a>',
          'Stakeholders suggested the ability to select multiple playlists at the same time as a source pool'
        ]
      }
    ]
  },
  {
    title: 'Week 9',
    content: [
      {
        title: 'Wednesday',
        date: '11/11/2020',
        content: [
          'UI tweaks',
          'Implement copying (by drag) of tracks from the master playlist',
          'Implemented playlist action panel to contain playlist functions',
          'Assigned a UUID to each track entry',
          'Fix genre and feature selection behaviour with custom tracks',
          'Fix bug which would cause playlist loading to fail if a "local" track was in the playlist',
          'Adjust playlist height to fit the screen',
          'Performance optimisations of track preview and track filters'
        ]
      },
      {
        title: 'Thursday',
        date: '12/11/2020',
        content: [
          'Implemented dynamic playlist height calculation, reflective on window resize'
        ]
      },
      {
        title: 'Friday',
        date: '13/11/2020',
        content: [
          'Removed hardcoded adjacent component heights, and implement height calculation that respects adjacent components'
          'Moved playlist sort button into the actions bar'
        ]
      }
    ]
  }
]
