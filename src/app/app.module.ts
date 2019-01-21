<<<<<<< HEAD
import { AddNewServiceProviderPage } from './../pages/add-new-service-provider/add-new-service-provider';
import { ServiceProvidersPage } from './../pages/service-providers/service-providers';
=======
import { EditClientPage } from './../pages/edit-client/edit-client';
import { AddNewClientPage } from './../pages/add-new-client/add-new-client';
>>>>>>> 8af7cd362bbbf94f111e8ad964c8175377935942
import { ClientsPage } from './../pages/clients/clients';
import { AddNewAgentPage } from './../pages/add-new-agent/add-new-agent';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// import { SplashScreen } from '@ionic-native/splash-screen';
// import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'; 

import { ToastService } from '../providers/util/toast.service';
import { AlertService } from '../providers/util/alert.service';
import { CameraProvider } from '../providers/util/camera.provider';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EditProfilePage } from './../pages/edit-profile/edit-profile';
import { TravelAgentsPage } from './../pages/travel-agents/travel-agents';
import { EditTravelAgentPage } from './../pages/edit-travel-agent/edit-travel-agent';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EditServiceProvidersPage } from '../pages/edit-service-providers/edit-service-providers';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EditProfilePage,
    TravelAgentsPage,
    EditTravelAgentPage,
    AddNewAgentPage,
    ClientsPage,
<<<<<<< HEAD
    ServiceProvidersPage,
    AddNewServiceProviderPage,
    EditServiceProvidersPage
=======
    AddNewClientPage,
    EditClientPage
>>>>>>> 8af7cd362bbbf94f111e8ad964c8175377935942

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EditProfilePage,
    TravelAgentsPage,
    EditTravelAgentPage,
    AddNewAgentPage,
    ClientsPage,
<<<<<<< HEAD
    ServiceProvidersPage,
    AddNewServiceProviderPage,
    EditServiceProvidersPage
=======
    AddNewClientPage,
    EditClientPage
>>>>>>> 8af7cd362bbbf94f111e8ad964c8175377935942

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AlertService,
    ToastService,
    CameraProvider,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
