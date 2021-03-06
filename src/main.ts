// import { platformNativeScriptDynamic } from "nativescript-angular/platform";
// import { AppModule } from "./app.module";
// platformNativeScriptDynamic().bootstrapModule(AppModule);

import { platformNativeScript } from "nativescript-angular";
import { AppModuleNgFactory } from "./aot/src/app.module.ngfactory";

platformNativeScript().bootstrapModuleFactory(<any>AppModuleNgFactory);