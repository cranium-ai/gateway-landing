import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file directory with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables or use defaults
const supabaseUrl = process.env.SUPABASE_URL || 'https://dgilkvoqovclzgwnmbfp.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY; // This should be set in your environment

if (!supabaseServiceKey) {
  console.error('Error: SUPABASE_SERVICE_KEY environment variable is required');
  process.exit(1);
}

// Initialize Supabase client with service key (admin privileges)
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Function to run migrations
async function runMigrations() {
  console.log('Running migrations...');
  
  try {
    // Get all migration files
    const migrationsDir = path.join(__dirname, '..', 'supabase', 'migrations');
    const migrationFiles = fs.readdirSync(migrationsDir)
      .filter(file => file.endsWith('.sql'))
      .sort(); // Sort to ensure migrations run in order
    
    // Execute each migration
    for (const file of migrationFiles) {
      console.log(`Applying migration: ${file}`);
      const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
      
      // Execute the SQL
      const { error } = await supabase.rpc('exec_sql', { sql });
      
      if (error) {
        console.error(`Error applying migration ${file}:`, error);
        process.exit(1);
      }
      
      console.log(`Successfully applied migration: ${file}`);
    }
    
    console.log('All migrations applied successfully!');
  } catch (error) {
    console.error('Error running migrations:', error);
    process.exit(1);
  }
}

// Run migrations
runMigrations(); 