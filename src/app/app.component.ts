import { Component, ViewChild } from '@angular/core';
import { Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = 'AboutPage';
  pages: Array<{ title: string, component: any, image: string }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'List', component: ListPage },
      { title: 'About', component: 'AboutPage', image: './assets/icons/ABOUT2.svg' },
      { title: 'Schedule', component: 'ScheduleTabsPage', image: './assets/icons/SCHED2.svg' },
      { title: 'Speakers', component: 'SpeakersTabsPage', image: './assets/icons/speak2.svg' },
      { title: 'Sponsors', component: 'SponsorsTabPage', image: './assets/icons/SPON2.svg' },
      { title: 'Venue', component: 'CityPage', image: './assets/icons/LOCATION2.svg' },
      { title: 'Contact', component: 'ContactsPage', image: './assets/icons/CONTACT2.svg' },
      ];
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.component != 'VotingPage'){
    this.nav.setRoot(page.component);
    }else{
      this.openLink();
    }

  }

  openLink(){
    window.open('https://goo.gl/forms/P7Tyz9VczLC2AuTr2', '_system', 'location=yes');
    return false;
  }
}