export type PromptTemplate = {
  id: string;
  name: string;
  version: number;
  content: string;
};

export class PromptManager {
  private templates = new Map<string, PromptTemplate>();

  register(template: PromptTemplate) {
    this.templates.set(template.id, template);
  }

  get(templateId: string) {
    return this.templates.get(templateId) ?? null;
  }
}
