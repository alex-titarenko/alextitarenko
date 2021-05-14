import { Project } from 'models/Project'

const projects: Project[] = [
  // Beautiful Fractals
  {
    id: 'd6a128c0-7732-4c46-9c6b-0afb8e6da796',
    alias: 'beautiful_fractals',
    name: 'Beautiful Fractals',
    stableVersion: '2.1.1',
    subtitle: 'A beautiful screensaver to show that math is not only exact science, - rather a beautiful one',
    releaseDate: '10/01/2013',
    supportedPlatforms: 'Windows 7/Windows 8/Windows 10',
    display: true,
    downloadUrl: 'https://github.com/alex-titarenko/beautifulfractals/releases/download/2.1.1/BeautifulFractalsSetup.exe',
    facebookPage: 'https://www.facebook.com/pages/Beautiful-Fractals/1544401659116646',
    gitHubPage: 'https://github.com/alex-titarenko/beautifulfractals',
    description: `
    <p>A beautiful screensaver to show that math is not only exact science, - rather a beautiful one.‏</p>
    <p>Everything on the screen is described by math expressions.</p>
    <p></p>
    <p>Screensaver includes more than 60 fractals, which will decorate your screen and will amaze your imagination. There are such fractals as&nbsp;Sierpinski Triangle, Dragon Curve, Koch Curve, Levy C curve, Fern Fractal, Mandelbrot Set, Phoenix Set, Julia Set, Newton Basins, etc.</p>
    <p></p>`,
    keyFeatures: [
      'Selection a gradient background of fractals',
      'Reordering fractal sequence',
      'Excluding specified fractals from the sequence',
      'Fractals preview by double-click on fractal caption (settings dialog)',
      'Filtering fractals by name',
      'Ability to show fractals in a random sequence'
    ],
    versionHistory: [
      {
        version: '1.0.0',
        releaseDate: '7/21/2009',
        description: 'First stable release',
        changes: []
      },
      {
        version: '2.0.0',
        releaseDate: '10/06/2013',
        description: 'This release has completely redesigned kernel of the fractal engine and has many new futures and improvements',
        changes: [
          'New: Filtering fractals by name',
          'New: Fractals preview by double-click',
          'New: Smoothing algorithm for rendering algebraic fractals',
          'New: Added End User License Agreement',
          'New: Setup screensaver as default',
          'Improved: Optimized performance',
          'Fixed: Bug with applying settings at autorun screensaver',
          'Misc: Modified installer application',
          'Misc: More general improvements, fixes, and optimizations',
        ]
      },
      {
        version: '2.0.1',
        releaseDate: '10/23/2013',
        description: 'Critical bug fix',
        changes: [
          'Fixed: Critical bug with resetting license during launch screensaver'
        ]
      }
    ],
    systemRequirements: '.NET Framework 4.5 or higher.',
    keywords: [
      'Fractal',
      'Screensaver',
      'Phoenix Set',
      'Koch curve',
      'Sierpinski\'s carpet',
      'Mandelbrot set',
      'Levy C curve',
      'Julia set',
      'Dragon Curve',
      'Fern Fractal'
    ],
    screenshots: [
      {
        caption: 'Mandelbrot Set 1',
        imageName: 'mandelbrot_set_1.png'
      },
      {
        caption: 'Mandelbrot Set 2',
        imageName: 'mandelbrot_set_2.png'
      },
      {
        caption: 'Mandelbrot Set 3',
        imageName: 'mandelbrot_set_3.png'
      },
      {
        caption: 'Mandelbrot Set 4',
        imageName: 'mandelbrot_set_4.png'
      },
      {
        caption: 'Newton Basins 1',
        imageName: 'newton_basins_1.png'
      },
      {
        caption: 'Newton Basins 2',
        imageName: 'newton_basins_2.png'
      },
      {
        caption: 'Newton Basins 3',
        imageName: 'newton_basins_3.png'
      },
      {
        caption: 'Julia Set 1',
        imageName: 'julia_set_1.png'
      },
      {
        caption: 'Julia Set 2',
        imageName: 'julia_set_2.png'
      },
      {
        caption: 'Julia Set 3',
        imageName: 'julia_set_3.png'
      },
      {
        caption: 'Dendrit',
        imageName: 'dendrit.png'
      },
      {
        caption: 'Dragon Curve',
        imageName: 'dragon_curve.png'
      },
      {
        caption: 'Fern Fractal',
        imageName: 'fern_fractal.png'
      },
      {
        caption: 'Football',
        imageName: 'football.png'
      },
      {
        caption: 'Tree 1',
        imageName: 'tree_1.png'
      },
      {
        caption: 'Tree 2',
        imageName: 'tree_2.png'
      },
      {
        caption: 'Tree 3',
        imageName: 'tree_3.png'
      },
      {
        caption: 'Preferences General',
        imageName: 'preferences_general.png'
      },
      {
        caption: 'Preferences Fractals',
        imageName: 'preferences_fractals.png'
      },
      {
        caption: 'Preferences About',
        imageName: 'preferences_about.png'
      }
    ]
  },

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

  // Testcheck
  {
    id: '9e8c8828-2df4-42bc-8167-764d976908a0',
    alias: 'testcheck',
    name: 'Testcheck',
    stableVersion: '2.2.0',
    subtitle: 'Testcheck is a system for creating tests and testing any kind of knowledge',
    releaseDate: '2016-06-13T00:00:00Z',
    supportedPlatforms: 'Windows 7/Windows 8/Windows 10',
    display: true,
    downloadUrl: 'https://github.com/alex-titarenko/testcheck/releases/download/2.2.0/TestcheckSetup.exe',
    facebookPage: 'https://www.facebook.com/TAlex.Testcheck',
    gitHubPage: 'https://github.com/alex-titarenko/testcheck',
    description: `
    <p>Testcheck is a complex system for creating tests and testing any kind of knowledge with great functionality. For compiling test, you can use seven different types of questions&nbsp;which will be more appropriate in your case.</p>
    <p>A rich text editor will make the process of creating tests straightforward, at the same time bringing a wide range of capabilities to decorate your tests with images, tables, text elements, etc. To prevent disclosure of the right answers, you can protect your test file with a strong password.‏ Also, there are rich features of management process of testing and scoring.‏</p>
    <p>Spend less time and get a better result!‏</p>`,
    keyFeatures: [
      'Rich text editor',
      'Ability to insert an image as an embedded resource',
      'Test file password protection',
      'Managing points for each question',
      'Setting a time limit passing the Test',
      'Seven different types of questions',
      'A visual animated indicator of current progress'
    ],
    versionHistory: [
      {
        version: '1.0.0.0',
        releaseDate: '3/13/2011',
        description: 'First stable release',
        changes: []
      },
      {
        version: '1.2.0.0',
        releaseDate: '3/26/2011',
        description: 'Minor improvements and bug fixes',
        changes: [
          'Improved: Rewritten user interface of the testing application',
          'Fixed: Bug which can appear during startup application'
        ]
      },
      {
        version: '2.0.0.0',
        releaseDate: '5/26/2011',
        description: 'This release provides completely rewritten core of the testing application, adds new question types',
        changes: [
          'Improved: Rewritten testing core of the application',
          'New: True/False question type',
          'New: Fill in the Blank question type',
          'New: Matching question type',
          'New: Ranking question type'
        ]
      },
      {
        version: '2.0.1.0',
        releaseDate: '7/22/2011',
        description: 'This update fixes a few small bugs',
        changes: [
          'Fixed: Incorrect response test editor during loading test from the command line',
          'Misc: NumericUpDown control imposed in a separate assembly'
        ]
      },
      {
        version: '2.1.0.0',
        releaseDate: '1/16/2013',
        description: 'This release introduces a couple of great important features and fixes some bugs',
        changes: [
          'New: Rich content editor for question description',
          'New: Ability to protect test file using a password',
          'New: Prevent to accept the answer in the case when there are no choices',
          'New: Saving and restoring a state of user choices between switching previous/next question',
          'Improved: User experience in UI',
          'Improved: Newly redesigned application installer provide more functionality during the installation process',
          'Misc: Many other changes, improvements and bug fixes'
        ]
      },
      {
        version: '2.1.1.0',
        releaseDate: '3/16/2014',
        description: 'This update fixes a few small bugs',
        changes: [
          'Fixed: Bug with displaying text in high DPI'
        ]
      },
      {
        version: '2.2.0',
        releaseDate: '6/13/2016',
        description: 'Making the product as freeware in this release we also opening the source code to engage everyone in contributing to product development',
        changes: []
      }
    ],
    systemRequirements: '.NET Framework 4.5 or higher.',
    keywords: [
      'test',
      'knowledge test',
      'test editor',
      'quiz',
      'scoring',
      'question',
      'true/false question',
      'ranking question',
      'matching question',
      'fill in the blank question',
      'essay question',
      'multiple response question',
      'multiple choice question'
    ],
    screenshots: [
      {
        caption: 'Tester - Fill in the Blank',
        imageName: 'tester_1_fill_in_the_blank.png'
      },
      {
        caption: 'Tester - Ranking',
        imageName: 'tester_2_ranking.png'
      },
      {
        caption: 'Tester - Essay',
        imageName: 'tester_3_essay.png'
      },
      {
        caption: 'Tester - Matching',
        imageName: 'tester_4_matching.png'
      },
      {
        caption: 'Tester - Multiple Response',
        imageName: 'tester_5_multiple_response.png'
      },
      {
        caption: 'Tester - True/False',
        imageName: 'tester_6_true_false.png'
      },
      {
        caption: 'Tester - Multiple Choice',
        imageName: 'tester_7_multiple_choice.png'
      },
      {
        caption: 'Editor - General Tab',
        imageName: 'editor_general_tab.png'
      },
      {
        caption: 'Editor - Questions Tab',
        imageName: 'editor_questions_tab.png'
      }
    ]
  }
];

export default projects
