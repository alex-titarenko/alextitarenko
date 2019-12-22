import React from 'react'
import { NextPageContext } from 'next'
import Head from 'next/head'
import Link from 'next/link'

type ErrorPageProps = {
  statusCode: number;
}

interface StatusDescriptions {
  [status: number]: string;
}

class ErrorPage extends React.Component<ErrorPageProps> {
  private static readonly statusDescriptions: StatusDescriptions = {
    404: 'The requested URL can not be found or might be temporarily unavailable.',
    500: 'The server encountered an unexpected condition that prevented it from fulfilling the request.'
  }

  static async getInitialProps({ res, err }) {
    const statusCode = (res ? res.statusCode : err && err.statusCode) | 404;
    return { statusCode };
  }

  public render() {
    return (
      <div className="error-container">
        <Head>
          <meta name="robots" content="noindex" />
        </Head>

        <h1>{ this.props.statusCode }</h1>
        <h2>Something went wrong!</h2>
        <p>{ ErrorPage.statusDescriptions[this.props.statusCode] }</p>
        <Link href="/"><a className="button">Go Home</a></Link>

        <style jsx global>{`
          html, body, body>div {
            height: 100%;
            min-height: 350px;
            min-width: 200px;
          }

          body {
            margin: 0;
            font-family: Roboto, "Helvetica Neue", sans-serif;
          }
        }
        `}</style>

        <style jsx>{`
          .error-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            margin: 0 20px;
          }

          h1 {
            font-size: 300px;
            font-weight: bold;
            margin: 0;
            color: white;
            text-shadow: 0 0 60px silver;
          }

          h2 {
            margin: 0;
            font-size: 1.5em;
            font-weight: bold;
          }

          p {
            font-size: 15px;
            text-align: center;
            display: block;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
          }

          a.button {
            text-transform: uppercase;
            background: dodgerblue;
            margin-top: 20px;
            padding: 0 30px;
          }

          .button {
            color: white;
            box-sizing: border-box;
            position: relative;
            user-select: none;
            cursor: pointer;
            outline: 0;
            border: none;
            -webkit-tap-highlight-color: transparent;
            display: inline-block;
            white-space: nowrap;
            text-decoration: none;
            vertical-align: baseline;
            text-align: center;
            margin: 0;
            min-width: 64px;
            line-height: 36px;
            padding: 0 16px;
            border-radius: 4px;
            overflow: visible;
            transform: translate3d(0,0,0);
            transition: background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);
            box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
          }

          .button:active {
            box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
          }

          @media (max-width: 1000px), (max-height: 550px) {
            h1 {
              font-size: 40vmin;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default ErrorPage
