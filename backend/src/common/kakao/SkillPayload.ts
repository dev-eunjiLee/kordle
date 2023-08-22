export type SkillPayload = {
  intent: any;
  userRequest: any;
  bot: any;
  action: Action;
};

export type Action = {
  params: {
    [key: string]: string;
  };
};
