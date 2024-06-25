class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  formElement: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    //   takes elements from HTML
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    //   takes all nodes from template
    const importedNodesFromTemplate = document.importNode(
      this.templateElement.content,
      true
    );
    //   takes first node from imported nodes(form)
    this.formElement =
      importedNodesFromTemplate.firstElementChild! as HTMLFormElement;
    // give id for add styles
    this.formElement.id = "user-input";
    // takes form inputs
    this.titleInputElement = this.formElement.querySelector(
      "#title"
    )! as HTMLInputElement;
    this.descriptionInputElement = this.formElement.querySelector(
      "#description"
    )! as HTMLInputElement;
    this.peopleInputElement = this.formElement.querySelector(
      "#people"
    )! as HTMLInputElement;
    //   add form to the screen

    this.configureForm();
    this.attach();
  }

  private submitHandler(e: Event) {
    e.preventDefault();
    console.log(this.titleInputElement.value);
  }

  private configureForm() {
    this.formElement.addEventListener("submit", this.submitHandler.bind(this));
  }
  // method to add form at the screen
  private attach() {
    this.hostElement.insertAdjacentElement("afterend", this.formElement);
  }
}

const prjInput = new ProjectInput();
