# Hunter Field Manual: Iceborne —  Layout

## a. Home Page
1. Title & logo: Hunter Field Manual: Iceborne
2. Featured sections: Monsters, Weapons, Mechanics, Hunter Tips
3. Search bar
4. Quick links to monster families

#### b. Monsters Section
5. Monster List Page
6. Monster cards with image, name, type, weaknesses
7. Filters and search bar

#### c. Weapons Section
8. Weapon List Page
9. Icons, names, summaries

#### d. Armor Section
- Armor Skills guide
- Upgrading

#### d. General Mechanics Section
10. Hitzones, part breaks, elemental vs. status
11. Affinity, crits, sharpness
12. Mantles, boosters
13. Clutch Claw
14. Mounting and stamina management
15. Monster states (enrage, exhaustion)

#### e. Hunter Knowledge / Tips
16. Early armor sets
17. Beginner weapon choices
18. Preparation checklists
19. Strategy advice
- Gathering/materials (optional)


## Monster Detail Pages
- Basic info: name, type, size, habitats, ecology
- Weaknesses table
- Behavior & moveset: attack patterns, rage cues, environment interactions
- Strategy guide: weapon tips, skills, mantles, openings
- Drops & rewards (optional)

## Weapon Detail Pages
- Overview: playstyle, strengths/weaknesses, difficulty
- Moveset and combos
- Advanced tips and build advice







VII. Admin Panel (Optional)
- Add/update monsters and weapons
- Upload images
- Edit descriptions and strategies
- Secure with simple authentication

VIII. Technical Structure
Database tables:
- monsters
- weapons
- mechanics (optional)
- users (admin)
- tips (optional)

API Routes:
- GET /api/monsters
- GET /api/monsters/:id
- GET /api/weapons
- GET /api/weapons/:id
- Optional POST/PUT routes for admin

Frontend Templates:
- Monster list
- Monster detail
- Weapon list
- Weapon detail
- Mechanics pages