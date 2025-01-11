import { Project } from 'models/Project'

const projects: Project[] = [
  // Game of Life
  {
    id: '0c6a9e5f-2093-4db0-a99c-ebdb1c5e2448',
    alias: 'game_of_life',
    name: 'Game of Life',
    stableVersion: '2.6.0',
    subtitle: 'Interesting version of computer realization of the mathematical game of "Life"',
    releaseDate: '2015-02-19T00:00:00Z',
    supportedPlatforms: 'Windows 10',
    display: true,
    externalUrl: 'https://www.microsoft.com/store/apps/9NGDF19NCGLX',
    facebookPage: 'http://www.facebook.com/TAlex.GameOfLife',
    gitHubPage: 'https://github.com/alex-titarenko/gameoflife',
    description: `
    <p>Interesting version of computer realization of the mathematical game of "Life" invented by British mathematician John Conway in 1970. This game is the best-known‏ example of cellular automaton.</p>
    <p>Venue of the game - "the universe" - is marked on the cell surface, unlimited, limited, or closed. Every cell on this surface can be in two states: dead or alive. The player does not take a direct part in the game. He only puts the initial configuration of live cells, which then interact according to certain rules without his participation. These rules lead to a huge variety of "life" that may arise in the game.</p>
    <p>This implementation provides you with an "unlimited" size of the Universe. It can be scaled, loaded and saved in many popular file formats. Also, there is an opportunity‏ to set rules for the game, the time of the new generations, etc. Editor stores user actions (who can roll them up to a specific moment, if necessary), transformations, such as rotations or flips, applicable on the selected areas.‏ It is possible to work with the clipboard that allows you to copy and paste the samples when it's necessary. Also, you can choose the color for the states of cells, gridlines, and background. The game has a friendly and intuitive user interface‏ that will help to fill gameplay with new feelings.</p>
    `,
    keyFeatures: [
      'Work with clipboard',
      'Hotkeys support',
      'Undo/Redo commands support for most operations',
      '"Unlimited" size of the universe',
      'The coloring of living cells in different colors depending on the previous state',
      'Transformations of the selected area, such as rotation and flip',
      'Fitting and centering of the pattern to the screen',
      'Support of the following formats (load/save): RLE, Cells, Lif 1.05, Lif 1.06',
      'Various rules of the game: you can choose the predefined rules or set them manually',
      'Saving the screenshot to file or clipboard'
    ],
    versionHistory: [
      {
        version: '1.0.0.0',
        releaseDate: '7/02/2009',
        description: 'First stable release',
        changes: []
      },
      {
        version: '1.0.0.1',
        releaseDate: '7/19/2009',
        description: 'This update adds minor changes in the user interface',
        changes: [
          'New: Added application icon',
          'New: Added information in the status bar'
        ]
      },
      {
        version: '1.2.15.23',
        releaseDate: '10/5/2010',
        description: 'This update adds minor changes in the user interface and small changes and improvements',
        changes: [
          'Misc: Redesigned user interface',
          'Misc: Updated application icon',
          'Misc: More general improvements, fixes, and optimizations'
        ]
      },
      {
        version: '1.2.16.25',
        releaseDate: '10/7/2010',
        description: 'This update added some improvements to the editor',
        changes: [
          'Improved: Editor: now it\'s possible to draw a series of cells without releasing the mouse button'
        ]
      },
      {
        version: '1.7.23.38',
        releaseDate: '11/30/2010',
        description: 'This update adds support for the format RLE, different rules of the game, and many minor additions, changes, and improvements',
        changes: [
          'New: Installer for the application',
          'New: Support the popular format RLE',
          'New: Various rules of the game: you can choose predefined rules or set manually',
          'New: Added opportunity to save screenshots of the game field in the file or clipboard',
          'Removed: Support of internal format for storing patterns',
          'Misc: Minor changes in the user interface',
          'Misc: More general improvements, fixes, and optimizations'
        ]
      },
      {
        version: '2.0.0.0',
        releaseDate: '11/20/2011',
        description: 'This release has completely redesigned kernel of the game that allows you to use unlimited gaming space, also were added many useful features',
        changes: [
          'New: "Unlimited" size of the universe',
          'New: Work with a clipboard',
          'New: Transformation of selected areas, such as rotations and reflections',
          'New: Coloring of living cells in different colors depending on its previous state',
          'New: Support commands Undo/Redo for most operations',
          'New: Editor tracking changes and, if necessary, notification of the possibility of losing',
          'New: Support hotkeys',
          'New: Fitting and centering of the pattern to the screen',
          'New: Color settings: state of the cells, background, grid lines, etc',
          'New: Support the following formats: Cells, Lif 1.05, Lif 1.06',
          'New: Additional predefined rules of the game',
          'New: Recording errors in the log file',
          'New: Remembering last window size and location',
          'New: Added help file for the application',
          'New: Added End User License Agreement',
          'Improved: Optimized performance',
          'Removed: Game modes: closed and finite, because the new version adds the unlimited mode',
          'Removed: Some UI elements because of uselessness due to change in the game engine',
          'Updated: TAlex.WPF.Controls 1.2.5.0',
          'Misc: Modified installer application: now it sets the association with the files that are supported by the application',
          'Misc: More general improvements, fixes, and optimizations',
        ]
      },
      {
        version: '2.0.2.0',
        releaseDate: '1/31/2012',
        description: 'This update fixed some bugs',
        changes: [
          'Fixed: bug with closing the application when pattern saving is canceled',
          'Misc: More general improvements, fixes, and optimizations'
        ]
      },
      {
        version: '2.2.1',
        releaseDate: '2/19/2015',
        description: 'This update fixed some bugs',
        changes: [
          'Fixed: bug with incorrect behavior on default update interval value',
          'Misc: Program installer has been updated'
        ]
      },
      {
        version: '2.3.0',
        releaseDate: '12/22/2019',
        description: 'This update changes installation format to MSI',
        changes: []
      },
      {
        version: '2.6.0',
        releaseDate: '6/10/2020',
        description: 'Publish applicaiton to Windows store',
        changes: []
      }
    ],
    systemRequirements: '.NET Framework 4.5 or higher.',
    keywords: [
      'cellular automaton',
      'glider',
      'gosper glider gun',
      'game of life',
      'John Conway',
      '.net',
      '.net framework'
    ],
    screenshots: [
      {
        caption: "Billiard Table (Pattern)",
        imageName: "billiard_table.png"
      },
      {
        caption: "Sample of 'coral' rule",
        imageName: "coral.png"
      },
      {
        caption: "Gun and Antigun - Day and Night rule (Pattern)",
        imageName: "day_and_night.png"
      },
      {
        caption: "Gosper Glider Gun (Pattern)",
        imageName: "gosper_glider_gun.png"
      },
      {
        caption: "LWSS Breeder (Pattern)",
        imageName: "lwss_breeder.png"
      },
      {
        caption: "Sample of 'maze' rule",
        imageName: "maze.png"
      },
      {
        caption: "Sample of 'persian rug' rule",
        imageName: "persian_rug.png"
      },
      {
        caption: "Turing Machine (Pattern)",
        imageName: "turing_machine.png"
      },
      {
        caption: "Sample of 'walled cities' rule",
        imageName: "walled_cities.png"
      },
      {
        caption: "Preferences Window",
        imageName: "preferences_window.png"
      }
    ]
  },

  // MultiCalc
  {
    id: 'faf66d3b-fab9-49df-93bb-907aeb6dc788',
    alias: 'multicalc',
    name: 'MultiCalc',
    subtitle: 'A powerful, modern, multifunctional calculator made for everyone',
    releaseDate: '05/05/2019',
    supportedPlatforms: 'Web, Android, iOS, Windows',
    display: true,
    externalUrl: 'https://about.multicalculator.app/',
    facebookPage: 'https://www.facebook.com/multicalcapp',
    twitterPage: 'https://twitter.com/multicalcapp',
    description: `
    <p>MultiCalc is fully cross-platform,&nbsp;powerful, modern, multifunctional calculator made for everyone.</p>
    <p>It works on Android, iOS, Windows and even on the Web. You can use one of three available modules:</p>
    <ul>
      <li><b>Calculator</b> - an advanced calculator with more than 70 built-in functions from different areas of math, full support of complex numbers and matrix calculations (even complex matrix calculations). History panel for quick insertion of previous calculations. Flexible settings for output result.</li>
      <li><b>Unit Converter</b> - unit converter with a vast amount of supported measurements (length, weight, volume, area, speed, time, temperature, energy, power, pressure, angle, data).</li>
      <li><b>Plot 2D (Graphing Calculator)</b> -  an interactive plot for drawing functions (traces) in Cartesian coordinates. You can add as many traces as you want to the plot. You can change color, thickness, and boundaries for an individual trace.</li>
    </ul>
    <p></p>`,
    keyFeatures: [
      'Fully cross-platform',
      'Basic/Engineering calculator',
      '70+ built-in mathematical functions',
      'Support of complex numbers',
      'Support of matrix calculations',
      'Linear system solving',
      'Сalculations history',
      'Unit converter',
      'Graphing calculator',
    ],
    versionHistory: [],
    systemRequirements: 'Browser',
    keywords: [
      'calculator',
      'engineering calculator',
      'unit converter',
      'plot 2d',
      'graphing calculator'
    ],
    screenshots: [
      {
        caption: '',
        imageName: 'my-experience-multicalc.png'
      },
      {
        caption: '',
        imageName: 'poster-art.png'
      },
      {
        caption: 'Calculator',
        imageName: 'calculator.png'
      },
      {
        caption: 'Calculator - Advance Keyboard',
        imageName: 'calculator_advance_keyboard.png'
      },
      {
        caption: 'Calculator - Complex Numbers',
        imageName: 'calculator_complex.png'
      }
    ]
  },

  // NotesHub
  {
    id: '6fb2183c-ebf3-4fb1-85f7-eb27e331afbb',
    alias: 'noteshub',
    name: 'NotesHub',
    subtitle: 'Fully cross-platform, vendor-agnostic, markdown based note-taking app',
    supportedPlatforms: 'Web',
    display: true,
    externalUrl: 'https://about.noteshub.app/',
    facebookPage: 'https://www.facebook.com/noteshubapp',
    twitterPage: 'https://twitter.com/noteshubapp',
    description: `
    <p>With NotesHub your notes truly belong to you and not tight to any particular vendor. All of your data is stored in Git repositories, so you can clone them and manage outside the app.</p>
    <p>Use power of Markdown to format your notes, create tables, lists, images, etc. Markdown will help to keep your notes in the same style regardless if you copied text from the internet or wrote from scratch, so no more different font-faces, font sizes, colors.</p>
    <p>Get the native app-like experience with modern progressive web application with no compromise. It means that you can use the application literally on any device. You can install it, use offline or just as website. In any case the application UI will adopt to your screen size that you can enjoy it and be productive.</p>`,
    keyFeatures: [
      'Works offline',
      'No vendor lock-in',
      'Periodic background sync of data',
      'Fully cross-platform',
      'Adaptive UI',
      'Supports dark theme',
      'Markdown preview with scroll sync',
      'Automatic merge conflicts resolution',
    ],
    versionHistory: [],
    systemRequirements: 'Browser',
    keywords: [
      'note-taking app',
      'markdown',
      'cross-platform',
      'vendor-agnostic',
      'dark theme',
      'pwa',
      'progressive web application',
      'web app',
      'git',
      'github'
    ],
    screenshots: [
      {
        caption: 'All Notebooks',
        imageName: 'all_notebooks.png'
      },
      {
        caption: 'Split View',
        imageName: 'split_view.png'
      },
      {
        caption: 'Add/Create a new Notebook',
        imageName: 'add_create_new_notebook.png'
      },
      {
        caption: 'Dark Theme',
        imageName: 'dark_theme.png'
      },
      {
        caption: 'Markdown Syntax Guidance',
        imageName: 'markdown_syntax_guidance.png'
      },
      {
        caption: 'Settings View',
        imageName: 'settings_view.png'
      },
      {
        caption: 'Mobile Version',
        imageName: 'mobile_version.png'
      }
    ]
  },
];

export default projects
