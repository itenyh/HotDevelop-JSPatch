//
//  HotComplileEngine.h
//  SmallCity
//
//  Created by Iten on 2018/6/21.
//  Copyright © 2018年 Essence. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface HotComplileEngine : NSObject

+ (instancetype)sharedInstance;

- (void)watchAndHotReload:(NSString *)filename;
- (void)hotReloadProject;
+ (void)loadMainJs;

@end
