import React from 'react';
import App, {Container} from 'next/app';
import * as Sentry from '@sentry/browser';
import '../lib/sentry';

type AppState = {
  error: Error|null;
  eventId: string|null;
};

class MyApp extends App {
  public state: AppState;
  public static async getInitialProps({Component, ctx}: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
  }

  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      eventId: null
    };
  }

  public componentDidCatch(error: Error, errorInfo: any) {
    this.setState({error});
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo);
      let eventId = Sentry.captureException(error);
      this.setState({eventId});
    });
    if(super.componentDidCatch) {
      super.componentDidCatch(error, errorInfo);
    }
  }

  public render() {
    const {Component, pageProps} = this.props;

    return (
      <Container>
        {this.state.error ?
          <a onClick={() => Sentry.showReportDialog({eventId: this.state.eventId as string})}>Report feedback</a> :
          <Component {...pageProps} />
        }
      </Container>
    );
  }
}

export default MyApp;
