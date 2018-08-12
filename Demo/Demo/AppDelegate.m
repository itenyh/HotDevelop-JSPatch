//
//  AppDelegate.m
//  Demo
//
//  Created by Iten on 2018/7/3.
//  Copyright © 2018年 Essence. All rights reserved.
//

#import "AppDelegate.h"
#import "HotComplileEngine.h"
#import "ViewController.h"
#import "TestViewController.h"

@interface AppDelegate ()

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    
    self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    UINavigationController *navController = [[UINavigationController alloc] initWithRootViewController:[TestViewController new]];
    navController.navigationBar.hidden = YES;
    self.window.rootViewController = navController;
    [self.window makeKeyAndVisible];
    
    UIButton *button = [UIButton new];
    [button setTitleColor:[UIColor blueColor] forState:UIControlStateHighlighted];
    [self.window addSubview:button];
    [button mas_makeConstraints:^(MASConstraintMaker *make) {
        make.left.equalTo(self.window);
        make.top.equalTo(self.window).offset(120);
    }];
    
    [button setTitle:@"eval" forState:UIControlStateNormal];
    [button addTarget:self action:@selector(eval) forControlEvents:UIControlEventTouchUpInside];
    button.backgroundColor = [UIColor redColor];
    
    return YES;
}

- (void)eval {
    [[HotComplileEngine sharedInstance] loadMainJs];
}

@end
