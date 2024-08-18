export class MalformedRequestFormat extends Error {
  statusCode?: number;
  constructor(message?: string) {
      super(message);
      console.log("next err 2");
    //   this.statusCode = statusCode;
  }
}
