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
    content: []
  },
  {
    title: 'Week 5',
    content: [
      {
        title: 'Friday',
        date: '16/10/2020',
        content: [
          'Add storage provider to allow storing of application data locally within the browser (for data caching)',
          'Create authentication model for interacting with the Spotify API'
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
          'Create playlist selector component that lets the user select the desired playlist to split'
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
          'Implement track re-ordering with <a href="https://react-beautiful-dnd.netlify.app/"><pre>react-beautiful-dnd</pre></a>',
          'Auto-load playlists when the playlist selector is opened'
        ]
      },
      {
        title: 'Friday',
        date: '30/10/2020',
        content: ['Code cleanup and type hinting optimisations']
      },
      {
        title: 'Saturday',
        date: '31/10/2020',
        content: [
          'Refactor the audio feature selector component',
          'Refactor track listing from the Master Playlist and Sub-Playlist into a TrackList component'
        ]
      }
    ]
  },
  {
    title: 'Week 8',
    content: [
      {
        title: 'Monday',
        date: '2/11/2020',
        content: [
          'Change Table format of the track listing into a List format, as it was more suitable'
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
          'Create track group stubs, and a wrapper for tracks so that custom metadata can be attached for each track'
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
          'Performance optimisations of track preview and track filters',
          'Implement copying (by drag) of tracks from the master playlist',
          'Fix genre and feature selection behaviour with custom tracks',
          'Fix bug which would cause playlist loading to fail if a "local" track was in the playlist',
          'Adjust playlist height to fit the screen',
          'Implemented playlist action panel to contain playlist functions'
        ]
      },
      {
        title: 'Friday',
        date: '13/11/2020',
        content: [
          'Implement dynamic playlist height calculation, reflective on window resize',
          'Remove hardcoded adjacent component heights, and implement height calculation that respects adjacent components',
          'Move playlist actions into the actions bar'
        ]
      }
    ]
  }
]
