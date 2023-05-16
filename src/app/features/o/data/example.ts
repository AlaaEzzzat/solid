export const Oexample = {
  ts: `// Define a contract for a logger
    export interface Logger {
      log(message: string): void;
    }
    
    // Implement the contract in a console logger
    @Injectable({ providedIn: 'root' })
    export class ConsoleLogger implements Logger {
      log(message: string): void {
        console.log(message);
      }
    }
    
    // Implement the contract in a file logger
    @Injectable({ providedIn: 'root' })
    export class FileLogger implements Logger {
      private readonly logFile = 'app.log';
    
      log(message: string): void {
        // Write the message to a log file
        // ...
      }
    }
    
    // Use the logger in a service without depending on a specific implementation
    @Injectable({ providedIn: 'root' })
    export class ProductService {
      constructor(private logger: Logger) {}
    
      getProducts(): Product[] {
        try {
          // Get the products from the server
          // ...
          return products;
        } catch (error) {
          this.logger.log("Error");
          return [];
        }
      }
    }`,
};
