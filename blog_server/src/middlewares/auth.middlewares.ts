import {
    HttpException,
    HttpStatus,
    Injectable
} from "@nestjs/common";
import { AuthService } from "src/services/auth/auth.service";


@Injectable()

export class AuthMiddleware {
    constructor(
        private readonly authService: AuthService
    ) { }

    async use(req: any, res: any, next: () => void) {
        let idToken = req.headers.authorization;
        if (idToken == undefined) {
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        }

        const bearer = idToken.split(' ');
        const token = bearer[1];
        try {
            let verifiedToken = await this.authService.verifyToken(token);
            if (verifiedToken == null) {
                throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
            }
            req.payload = verifiedToken;
            next();
        } catch (error) {
            console.log(error);
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
    }
}
