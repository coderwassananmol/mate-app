package com.mate;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.gijoehosaphat.pusher.PusherPackage;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.appevents.AppEventsLogger;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

	  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

	  protected static CallbackManager getCallbackManager() {
		return mCallbackManager;
	  }

	  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
		@Override
		public boolean getUseDeveloperSupport() {
		  return BuildConfig.DEBUG;
		}

		@Override
		protected List<ReactPackage> getPackages() {
		  return Arrays.<ReactPackage>asList(
		      	new MainReactPackage(),
						new FBSDKPackage(mCallbackManager),
		        new PusherPackage(),
		        new ReactNativePushNotificationPackage(),
		        new VectorIconsPackage()
		  );
		}

		@Override
		protected String getJSMainModuleName() {
		  return "index";
		}
	  };

	  @Override
	  public ReactNativeHost getReactNativeHost() {
		return mReactNativeHost;
	  }

	  @Override
	  public void onCreate() {
		super.onCreate();
		FacebookSdk.sdkInitialize(getApplicationContext());
		AppEventsLogger.activateApp(this);
		SoLoader.init(this, /* native exopackage */ false);
	  }
}
