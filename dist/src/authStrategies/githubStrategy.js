import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github2';
import dotenv from 'dotenv';
dotenv.config();
// Använd GitHub-strategin
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "https://main.d2zbjg7v8bstm4.amplifyapp.com"
}, (accessToken, refreshToken, profile, done) => {
    try {
        // Logga profil för felsökning
        console.log(profile);
        const user = {
            id: profile.id,
            username: profile.username || profile.displayName,
            displayName: profile.displayName,
            profileUrl: profile.profileUrl || '', // Kontrollera att detta finns
            emails: profile.emails || [] // Kontrollera att detta finns
        };
        console.log(user);
        return done(null, user); // Skicka den skapade användaren
    }
    catch (err) {
        console.error('Error during authentication', err);
        return done(err); // Skicka fel
    }
}));
