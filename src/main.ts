// Bootstrap with dynaminc compiler
// import { platformNativeScriptDynamic } from "nativescript-angular/platform";
// import { AppModule } from "./app.module";
// platformNativeScriptDynamic().bootstrapModule(AppModule);


// Bootstrap using AOT
import { platformNativeScript } from "nativescript-angular";
import { AppModuleNgFactory } from "./app.module.ngfactory";
platformNativeScript().bootstrapModuleFactory(<any>AppModuleNgFactory);