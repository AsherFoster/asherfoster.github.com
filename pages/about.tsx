import React from 'react';
import PageLayout from '../components/PageLayout';
import PageContent from '../components/PageContent';

const Contact = () => (
  <PageLayout title="Hi, I'm Asher" htmlTitle='About'>
    <PageContent>
      <p>I'm Asher, a student based in Christchurch, New Zealand. I've been building things with code for about 5 years now.
        Things I've built vary from full stack apps that swamp me with challenges, to simple canvas games such
        as <a href='/experiments/8'>Minesweeper</a>. Often the things I've made have no real use, but I've been able to
        gather a ton of skills from them.</p>

      <p>It's surprising what can be done when you're bored out of your mind. If you're still reading this far, you should
        totally hire me. I'm not sure what else to write to pad out this page, so have a list of random things I've done:</p>

      <ul>
        <li>Written React apps, and gotten them auto-deploying to Github pages with CI!
          See: <a href='//github.com/AsherFoster/asherfoster.github.com'>this</a></li>
        <li>Done the same with Angular apps and Azure. See: Developster</li>
        <li>Been part of a team working to kickstart young entrepreneurs.
          See: <a href='//medium.com/Developster-Archive'>Developster</a></li>
        <li>Built far too many Discord bots</li>
        <li>Gotten fed up with firewalls, and done <a href='//github.com/AsherFoster/HTTPSProxy'>fun things</a> to
          get around them (Employers love that, right?)</li>
        <li>Dabbled with <a href='//github.com/AsherFoster/LineageCheckerApp'>React Native</a> and Electron</li>
        <li>Messed with wordpress. Never again. Nope.</li>
      </ul>
    </PageContent>
  </PageLayout>
);

export default Contact;
