({
 		accuracy: true,
 		basePower: 0,
 		category: "Status",
 		name: "Shell Shield",
 		pp: 8,
 		priority: 0,
		flags: {snatch: 1, nonsky: 1, allyanim: 1, noassist: 1},
        volatileStatus: 'substitute',
        onTryHit(source) {
        	if (source.volatiles['substitute']) {
        		this.add('-fail', source, 'move: Substitute');
        		return this.NOT_FAIL;
        	}
        },
        condition: {
        	onStart(target, source, effect) {
        		if (effect?.id === 'shellshield') {
        			this.add('-start', target, 'Substitute', '[from] move: Shell Shield');
        		} else {
        			this.add('-start', target, 'Substitute');
        		}
        		this.effectState.hp = Math.floor( (source.def / 2.6);
        		if (target.volatiles['partiallytrapped']) {
        			this.add('-end', target, target.volatiles['partiallytrapped'].sourceEffect, '[partiallytrapped]', '[silent]');
        			delete target.volatiles['partiallytrapped'];
        		}
        	},
        	onTryPrimaryHitPriority: -1,
        	onTryPrimaryHit(target, source, move) {
        		if (target === source || move.flags['bypasssub'] || move.infiltrates) {
        			return;
        		}
        		let damage = this.actions.getDamage(source, target, move);
        		if (!damage && damage !== 0) {
        			this.add('-fail', source);
        			this.attrLastMove('[still]');
        			return null;
        		}
        		damage = this.runEvent('SubDamage', target, source, move, damage);
        		if (!damage) {
        			return damage;
        		}
        		if (damage > target.volatiles['substitute'].hp) {
        			damage = target.volatiles['substitute'].hp as number;
        		}
        		target.volatiles['substitute'].hp -= damage;
        		source.lastDamage = damage;
        		if (target.volatiles['substitute'].hp <= 0) {
        			if (move.ohko) this.add('-ohko');
        			target.removeVolatile('substitute');
        		} else {
        			this.add('-activate', target, 'move: Substitute', '[damage]');
        		}
        		if (move.recoil || move.id === 'chloroblast') {
        			this.damage(this.actions.calcRecoilDamage(damage, move, source), source, target, 'recoil');
        		}
        		if (move.drain) {
        			this.heal(Math.ceil(damage * move.drain[0] / move.drain[1]), source, target, 'drain');
        		}
        		this.singleEvent('AfterSubDamage', move, null, target, source, move, damage);
        		this.runEvent('AfterSubDamage', target, source, move, damage);
        		return this.HIT_SUBSTITUTE;
        	},
        	onEnd(target) {
        		this.add('-end', target, 'Substitute');
        	},
        },
 		secondary: null,
 		target: "adjacentAllyOrSelf",
 		type: "Dragon",
 		contestType: "Cool",
})