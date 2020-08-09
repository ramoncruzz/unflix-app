//
//  RNLocale.m
//  UnFlix
//
//  Created by Ramon  Cruz on 09/08/20.
//

#import "RNLocale.h"
#import <React/RCTLog.h>

@implementation RNLocale

RCT_EXPORT_MODULE();

RCT_REMAP_METHOD(getLocale,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  @try {
    NSLocale* locale = [NSLocale autoupdatingCurrentLocale];
    NSString* code = locale.languageCode;
    resolve(code);
  } @catch (NSException *exception) {
    NSError *error;
    reject([exception name],[exception reason],error);

  }
}

@end
