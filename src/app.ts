// autoBind decorator

function autoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const methodUpdate: PropertyDescriptor = {
    configurable: true,
    get() {
      const bindFN = originalMethod.bind(this);
      return bindFN;
    },
  };
  return methodUpdate;
}

// class ProjectInput
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

  private userInputValues(): [string, string, number] | void {
    const titleInputValue = this.titleInputElement.value;
    const descriptionInputValue = this.descriptionInputElement.value;
    const peopleInputValue = this.peopleInputElement.value;

    if (
      titleInputValue.trim().length === 0 ||
      descriptionInputValue.trim().length === 0 ||
      peopleInputValue.trim().length === 0
    ) {
      alert("Invalid input, please try again");
    }
    return [titleInputValue, descriptionInputValue, +peopleInputValue];
  }
  // submit event
  @autoBind
  private submitHandler(e: Event) {
    e.preventDefault();
    const inputValues = this.userInputValues();
    if (Array.isArray(inputValues)) {
      const [title, desc, people] = inputValues;
      console.log(title, desc, people);
    }
  }
  // method to add EventListener on the form
  private configureForm() {
    this.formElement.addEventListener("submit", this.submitHandler);
  }
  // method to add form at the screen
  private attach() {
    this.hostElement.insertAdjacentElement("afterend", this.formElement);
  }
}

const prjInput = new ProjectInput();
